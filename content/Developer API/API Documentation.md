---
draft: false
tags:
  - API
  - Dev
  - Development
---

>[!danger] 
>If you want to use this you must use build from feature/api branch as it not yet ready
>https://github.com/rm20killer/Anglers-Almanac/pull/20



This page is to show how to use the API for your own plugins.
If your looking to add your own content like fish, rods, bait please look at:
- [[2. Adding new loot]]
- [[3. Adding your fish to the Almanac]]
- [[4. Creating a fishing rod]]

As this can be done in game using the **Hytale Asset Editor**
# Environment Setup

To build against the Anglers Almanac API, you must provide the library to your compiler without bundling it into your JAR *(since the server provides the jar)*.

### Gradle Configuration (`build.gradle`)

>[!warning] 
>Gradle stuff will change as I make it easier to use the API


Add the Almanac JAR to your libs folder and define it as compileOnly

```gradle
dependencies { // Hytale Core API 
	compileOnly("com.hypixel.hytale:Server:$hytale_build")
	...
	
	
	compileOnly(files("libs/AnglersAlmanac-1.0.5.jar")) 
}
```


### Plugin Manifest (`manifest.json`)
You must update manifest so Hytale know to load the plugins in the correct order.

```JSON
"Dependencies": {
    "dev.rm20:AnglersAlmanac": "*"
}
```

# Using the Angler's Almanac API

Angler's Almanac uses events to handle the API.
Current events are as followed
- [[LootCaughtEvent]]
	- *Triggers whenever a player successfully catches an item when fishing*

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
            LootCaughtEvent.class,  
            Example::onLootCaught // this is the function you want to call
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

