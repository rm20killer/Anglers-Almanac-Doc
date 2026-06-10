---
draft: false
tags:
  - API
  - Dev
  - Development
---

The `FishingRodCastEvent` is dispatched by the item interaction system right when a player attempts to cast their fishing rod. It contains contextual data about the interaction and the player initiating it. Marking this event as canceled will completely prevent the fishing rod from being cast.

### Class Location

`dev.rm20.anglersalmanac.IEvents.FishingRodCastEvent;`

### Getters

Use these methods within your listener to inspect the casting context or cancel the action:

|**Method**|**Return Type**|**Description**|
|---|---|---|
|`getPlayer()`|`Ref<EntityStore>`|Returns the reference to the player entity who is casting the rod.|
|`getInteractionType()`|`InteractionType`|Returns the type of interaction protocol used (e.g., right-click, left-click).|
|`getContext()`|`InteractionContext`|Returns the rich environment context of the interaction (e.g., targeted block, position).|
|`setCanceled(boolean cancel)`|`void`|Inherited from `CancellableEcsEvent`. Set to `true` to halt the casting process immediately.|

### Implementation Example


```Java

```