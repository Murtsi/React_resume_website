'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'

type ScenarioId = 'normal' | 'injection' | 'tool-misuse'
type TraceState = 'complete' | 'active' | 'blocked' | 'idle'
type EdgeState = 'active' | 'stopped' | 'idle'

interface TraceStage {
  label: string
  stateLabel: string
  state: TraceState
  edge: EdgeState
}

interface Scenario {
  id: ScenarioId
  label: string
  outcome: 'Allowed' | 'Blocked' | 'Denied'
  summary: string
  stages: TraceStage[]
}

const scenarios: Scenario[] = [
  {
    id: 'normal',
    label: 'Normal request',
    outcome: 'Allowed',
    summary: 'The request follows the allowed path to a tool.',
    stages: [
      { label: 'Input', stateLabel: 'Received', state: 'complete', edge: 'active' },
      { label: 'Agent', stateLabel: 'Evaluated', state: 'complete', edge: 'active' },
      { label: 'Policy gate', stateLabel: 'Allowed', state: 'complete', edge: 'active' },
      { label: 'Tool', stateLabel: 'Called', state: 'active', edge: 'idle' },
    ],
  },
  {
    id: 'injection',
    label: 'Prompt injection',
    outcome: 'Blocked',
    summary: 'The concept stops the injected instruction at the policy gate.',
    stages: [
      { label: 'Input', stateLabel: 'Received', state: 'complete', edge: 'active' },
      { label: 'Agent', stateLabel: 'Evaluated', state: 'complete', edge: 'active' },
      { label: 'Policy gate', stateLabel: 'Blocked', state: 'blocked', edge: 'stopped' },
      { label: 'Tool', stateLabel: 'Not called', state: 'idle', edge: 'idle' },
    ],
  },
  {
    id: 'tool-misuse',
    label: 'Tool misuse',
    outcome: 'Denied',
    summary: 'The concept denies a tool action outside the allowed policy.',
    stages: [
      { label: 'Input', stateLabel: 'Received', state: 'complete', edge: 'active' },
      { label: 'Agent', stateLabel: 'Evaluated', state: 'complete', edge: 'active' },
      { label: 'Policy gate', stateLabel: 'Denied', state: 'blocked', edge: 'stopped' },
      { label: 'Tool', stateLabel: 'Not called', state: 'idle', edge: 'idle' },
    ],
  },
]

export default function AgentSecurityTrace() {
  const [selectedId, setSelectedId] = useState<ScenarioId>('injection')
  const selected = scenarios.find((scenario) => scenario.id === selectedId) ?? scenarios[0]

  return (
    <article className="agent-security-lab" aria-labelledby="agent-security-lab-heading">
      <header className="agent-security-lab-header">
        <div>
          <span className="agent-security-lab-kicker">Current focus</span>
          <h3 id="agent-security-lab-heading">Agent Security Lab</h3>
        </div>
        <span className="agent-security-lab-status">
          <span aria-hidden="true" />
          In development
        </span>
      </header>

      <p className="agent-security-lab-description">
        A local concept for exploring how an LLM agent handles untrusted input and tool
        requests. The project is currently in development.
      </p>

      <div
        className="agent-security-scenarios"
        role="group"
        aria-label="Agent security scenario"
      >
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            aria-pressed={selectedId === scenario.id}
            onClick={() => setSelectedId(scenario.id)}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      <div
        className="agent-security-outcome"
        data-outcome={selected.outcome.toLowerCase()}
        aria-live="polite"
        aria-atomic="true"
      >
        <div>
          <span>Scenario result</span>
          <strong>{selected.outcome}</strong>
        </div>
        <p>{selected.summary}</p>
      </div>

      <ol key={selected.id} className="agent-security-trace" aria-label={`${selected.label} trace`}>
        {selected.stages.map((stage, index) => (
          <li
            key={stage.label}
            data-state={stage.state}
            data-edge={stage.edge}
            aria-current={stage.state === 'active' || stage.state === 'blocked' ? 'step' : undefined}
            style={{ '--trace-index': index } as CSSProperties}
          >
            <span className="agent-security-stage-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="agent-security-stage-copy">
              <strong>{stage.label}</strong>
              <span>{stage.stateLabel}</span>
            </span>
          </li>
        ))}
      </ol>

      <footer className="agent-security-lab-footer">
        <span>Local concept</span>
        <span>No live model or tool execution</span>
      </footer>
    </article>
  )
}
