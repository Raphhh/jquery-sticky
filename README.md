jQuery Sticky
=============

A jQuery plugin that sticks an element while scrolling.
See the [demo](#).


## A. Install

1) Include a jQuery core library in your html.
For example, use this cdn:
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

2) [Download the Sticky library](https://github.com/Raphhh/jquery-sticky/archive/master.zip), and include 'dist/jquery.sticky.min.js' in your html.
For example:
```html
<script src="asset/raphhh/jquery-sticky/dist/jquery.sticky.min.js"></script>
```
3) Call the Sticky plugin for all the elements you want to stick up.
For example:
```html
<script>
    $(function(){
        $('nav').sticky();
    });
</script>
```

## B. Documentation

### B.1. Options

$.fn.sticky accepts the following options:
```html
<script>
    $(function(){
        $('nav').sticky({
            top: '0', //in px, the distance from the top of the page. To remove the default value, use 'inherit' value.
            width: '100%', //the width value applied when the element is stuck. To remove the default value, use 'inherit' value.
            'z-index': '10000000' //the z-index value applied when the element is stuck. To remove the default value, use 'inherit' value.
        });
    });
</script>
```

### B.2. Events

You can attach two events:

#### stick event

This event is dispatched when the element is stuck.
```html
<script>
    $(function(){
        $('nav').sticky()
        .on('stick', function(event, scrollPosition){
            console.debug('stick event', this);
        });
    });
</script>
```

You can trigger this event on the element to force the stick.
```html
<script>
    $(function(){
        $('nav').sticky()
        .trigger('stick');
    });
</script>
```

#### unstick event

This event is dispatched when the element is unstuck.
```html
<script>
    $(function(){
        $('nav').sticky()
        .on('unstick', function(event, scrollPosition){
            console.debug('unstick event', this);
        });
    });
</script>
```

You can trigger this event on the element to force the unstick.
```html
<script>
    $(function(){
        $('nav').sticky()
        .trigger('unstick');
    });
</script>
```

### B.3. Classes

Two classes are automatically added to the element:

- *stuck* class is added when the element is stuck.
- *unstuck* class is added when the element is not stuck.
