"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { Task } from "@/lib/schema"
import { DataTableColumnHeader } from "@/components/data-table-column-header"

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div>CHECK-{String(row.index).padStart(6, '0')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "CheckTitle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Check Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.original.CheckTitle}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "CheckResult",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Check Result" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.original.StatusExtended}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "ServiceName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.original.ServiceName}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "Type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.original.CheckType}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "Description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center min-w-[250px]">
          <span>{row.original.Description}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "Risk",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Risk" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center min-w-[250px]">
          <span>{row.original.Risk}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "Severity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Severity" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
          {row.getValue("Severity") === "low" ?
           <Badge className="bg-blue-500">
            LOW
          </Badge>
          : row.getValue("Severity") === "medium" ?
          <Badge className="bg-amber-600">
          MEDIUM
          </Badge>
          : row.getValue("Severity") === "high" ?
          <Badge className="bg-red-500">
          HIGH
          </Badge>
          : row.getValue("Severity") === "critical" ?
          <Badge className="bg-purple-600">
          CRITICAL
          </Badge> 
          : 
          <Badge className="bg-gray-600">
          UNKNOWN
          </Badge> 
        }
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "Status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
          {row.getValue("Status") === "FAIL" ?
           <Badge className="bg-red-500">
            FAIL
          </Badge>
          : 
          <Badge className="bg-green-600">
          PASS
          </Badge>
          }
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]
