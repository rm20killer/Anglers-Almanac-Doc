---
draft: false
tags:
  - API
---
```java
protected String itemID;  
protected String entityID;  
protected String name;  
protected String description;  
protected String[] category;  
protected String familyId;  
protected String rarity;  
protected int weight;  
protected boolean isGlobal;  
protected Habitats habitats;  
protected Quantity quantity;  
protected MinigameStats minigameStats;  
protected BookInfo bookInfo;
```


```java
public static class Habitats {  
    public String[] zones = new String[0];  
    public Integer[] tier = new Integer[0];  
    public String[] regions = new String[0];  
    public String[] biomes = new String[0];  
    public TimePeriod[] time_of_day = new TimePeriod[0];  
    public String[] required_weather = new String[0];  
    public Integer[] moon_phase = new Integer[0];  
    public int min_depth = 0;  
    public Height height = new Height(0, -1);  
    public String[] exclude_zones = new String[0];  
    public Integer[] exclude_tiers = new Integer[0];  
    public String[] exclude_biomes = new String[0];  
    public String[] exclude_regions = new String[0];  
    //public ExcludeHabitats excludeHabitats;  
    public float weight_multiplier = 0.0f;  
  
    public String[] required_bait = new String[0];  
    public int required_power = 0;  
}
```

```java
public static class Quantity {  
    public int min_amount = 1;  
    public int max_amount = 1;  
}
```


```java
public static class MinigameStats {  
    public int difficulty = 1;  
    public MinigameBehaviour behavior = MinigameBehaviour.NONE;  
    public int stamina = 1;  
    public GameIcon gameIcon = GameIcon.FISH;  
}
```


```java
public static class BookInfo {  
    public String image_file;  
    public String habitat_info;  
    public String PageFileUI;  
}
```