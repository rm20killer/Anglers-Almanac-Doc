---
draft: false
tags:
  - API
---

```java
public static void register(String id, FishingMinigameHandler handler)
```
Registers a new minigame handler with a id.

```java
public static Optional<FishingMinigameHandler> get(String id)
```
Returns the fishing minigame handler based on the id.

```java
public static boolean contains(String id)
```
Checks if an identifier has a minigame handler attached to it.

```java
public static Set<String> getIds()
```
Returns an unmodifiable set of all registered minigame IDs.