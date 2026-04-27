---
draft: false
tags:
  - API
  - Dev
  - Development
---

>[!danger] 
>Those are early stage version of the API, subject to change.
>Will try to keep it the same



This page is to show how to use the API for your own plugins.
If your looking to add your own content like fish, rods, bait please look at:
- [[2. Adding new loot]]
- [[3. Adding your fish to the Almanac]]
- [[4. Creating a fishing rod]]

As this can be done in game using the **Hytale Asset Editor**
# Environment Setup

To build against the Anglers Almanac API, you must provide the library to your compiler without bundling it into your JAR *(since the server provides the jar)*.

### Gradle Configuration (`build.gradle`)


Add https://jitpack.io as a repo
Define the anglers api as compileOnly like the following.
Make sure you change "1.0.8" with the latest version in case of api changes

```gradle
repositories {  
	... 
    maven { url 'https://jitpack.io' }  
}

dependencies { // Hytale Core API 
	compileOnly("com.hypixel.hytale:Server:$hytale_build")
	...
	
	
	compileOnly("com.github.rm20killer:Anglers-Almanac:1.0.8")
}
```


### Plugin Manifest (`manifest.json`)
You must update manifest so Hytale know to load the plugins in the correct order.

```JSON
"Dependencies": {
    "dev.rm20:AnglersAlmanac": "*" // you can replace * with version
}
```

# Using the Angler's Almanac API

Angler's Almanac uses events to handle the API.
Current events are as followed
- [[LootCaughtEvent]]
	- *Triggers whenever a player successfully catches an item when fishing*
- [[FishingFailedEvent]]
	- *Triggers when a player fails the minigame and the loot escapes*
### Registering the Event

You must register to the event this can be like the following:
You must pass the class type of the event and a method reference (or lambda) to handle the logic.

```java
@Override  
protected void setup() {  
    LOGGER.atInfo().log("Setting up plugin " + this.getName());  
    registerEvents();
}

private void registerEvents() {  
    EventRegistry events = this.getEventRegistry();  
    events.registerGlobal(  
            LootCaughtEvent.class, // The event your trying to listen to
            Example::onLootCaught // This is the function you want to call
    );  
}
```


### Handling the Event

You can now create a static function to handle the event and do what ever you want.

```java
/**
 * Triggered by AnglersAlmanac when a loot item is caught.
 * @param event The event context containing catch data.
 */
public static void onLootCaught(LootCaughtEvent event) {
    // Logic to execute when a fish is caught
    LOGGER.atInfo().log("Fish caught by player!");
}
```


>[!note] 
>If you want your plugin to work _without_ AnglersAlmanac being installed, you must move the dependency to `OptionalDependencies` in the JSON and wrap your `registerEvents()` call in a `Class.forName` check to avoid runtime crashes.

