// mappings.ts
// Example AssemblyScript handler for The Graph

import { Transfer } from '../generated/EuroPalToken/EuroPalToken'
import { Transfer as TransferEntity } from '../generated/schema'

export function handleTransfer(event: Transfer): void {
  let entity = new TransferEntity(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
