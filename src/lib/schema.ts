import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  Status: z.string(),
  Severity: z.string(),
  CheckTitle: z.string(),
  CheckType: z.array(z.string()),
  ServiceName: z.string(),
  FindingUniqueId: z.string(),
  Description: z.string(),
  Risk: z.string(),
  StatusExtended: z.string(),
})

export type Task = z.infer<typeof taskSchema>
