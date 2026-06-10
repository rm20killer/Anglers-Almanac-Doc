---
draft: false
tags:
  - API
  - Dev
  - Development
---

The `FishingRodEntityPullEvent` is dispatched by the Reel interaction system when a player reels in a bobber that has successfully attached to an entity. It triggers right before the target entity is pulled toward the player, allowing you to intercept, modify, or completely block the physical launch.

### Class Location

`dev.rm20.anglersalmanac.IEvents.FishingRodEntityPullEvent;`

### Getters & Setters

Use these methods within your listener to handle or manipulate the entity pulling behavior:

|**Method**|**Return Type**|**Description**|
|---|---|---|
|`getPlayer()`|`Ref<EntityStore>`|Returns the reference to the player entity who is reeling in.|
|`getTarget()`|`Ref<EntityStore>`|Returns the reference to the entity targeted by the bobber.|
|`getLaunchVelocity()`|`Vector3d`|Returns the current 3D vector velocity that will be applied to the target.|
|`setLaunchVelocity(Vector3d lVelocity)`|`void`|Modifies the launch velocity vector to change how far/fast the entity is pulled.|
|`setCanceled(boolean cancel)`|`void`|Inherited from `CancellableEcsEvent`. Set to `true` to stop the pull from happening.|

### Implementation Example


```Java

```