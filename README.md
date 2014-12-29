jQuery Sticky
=============

A jQuery plugin that sticks an element (a navigation bar for example) while scrolling. It is simple to setup. It can be added to any existing page without the need to change the HTML mark up.
See the [demo](http://raphaellefebvre.be/sticky/).

If you select several elements, all be stuck. They can be placed side by side, or be superimposed (see options).

## A. Install

1) Include a jQuery core library in your html.
For example, use this cdn:
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

2) [Download the Sticky library](https://github.com/Raphhh/jquery-sticky/archive/master.zip), and include *dist/jquery.sticky.min.js* in your html.
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
            superposition: false, //indicates if the different elements stick over the previous
            top: '0', //in px, the distance from the top of the page. To remove the default value, use 'inherit' value.
            width: '100%', //the width value applied when the element is stuck. To remove the default value, use 'inherit' value.
            'z-index': '10000000' //the z-index value applied when the element is stuck. To remove the default value, use 'inherit' value.
        });
    });
</script>
```

### B.2. Events

Sticky works with two events:

#### *stick* event

This event is dispatched when an unstuck element becomes stuck.
```html
<script>
    $(function(){
        $('nav').on('stick', function(event, scrollPosition){
            console.debug('stick event', this);
        });
    });
</script>
```

You can trigger this event on the element to force the stick.
```html
<script>
    $(function(){
        $('nav').trigger('stick');
    });
</script>
```

You can also remove this event from the element to avoid the stick. Once unstuck, an element will never stick anymore.
```html
<script>
    $(function(){
        $('nav').off('stick');
    });
</script>
```

#### *unstick* event

This event is dispatched when a stuck element becomes unstuck.
```html
<script>
    $(function(){
        $('nav').on('unstick', function(event, scrollPosition){
            console.debug('unstick event', this);
        });
    });
</script>
```

You can trigger this event on the element to force the unstick.
```html
<script>
    $(function(){
        $('nav').trigger('unstick');
    });
</script>
```

You can also remove this event from the element to avoid the unstick. Once stuck, an element will never unstick anymore.
```html
<script>
    $(function(){
        $('nav').off('unstick');
    });
</script>
```

### B.3. Classes

Two classes are automatically added to the element:

- *stuck* class is added when the element is stuck.
- *unstuck* class is added when the element is not stuck.
