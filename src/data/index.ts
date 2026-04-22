/* ─── Project registry ────────────────────────────────────────────────────
 *
 * Add, remove, or reorder projects here.
 * The order here determines the order on the landing page AND the
 * Previous / Next navigation on project pages.
 *
 * ──────────────────────────────────────────────────────────────────────── */

import { scania } from './projects/scania'
import { netlightFeedback } from './projects/netlightFeedback'
import { polestar } from './projects/polestar'
import { ovulai } from './projects/ovulai'
import { propertyFinder } from './projects/propertyFinder'
import { senseworks } from './projects/senseworks'
import { coompanion } from './projects/coompanion'
import type { Project } from './types'

export const PROJECTS: Project[] = [
  scania,
  netlightFeedback,
  polestar,
  ovulai,
  propertyFinder,
  senseworks,
  coompanion,
]

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id)
}

export function getAdjacentProjects(id: string): { prev?: Project; next?: Project } {
  const index = PROJECTS.findIndex((p) => p.id === id)
  if (index === -1) return {}
  return {
    prev: PROJECTS[index - 1],
    next: PROJECTS[index + 1],
  }
}
