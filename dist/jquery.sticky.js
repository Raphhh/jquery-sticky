/**
 * jQuery Sticky 1.0.0
 * @author Raphaël Lefebvre <raphael@raphaellefebvre.be>
 * @website https://github.com/Raphhh/jquery-sticky
 */
(function ( $, window ) {
    "use strict";

    $.fn.sticky = function( options ) {

        var $stuckableTags = this,
            settings = $.extend({
                top: '0',
                width: '100%',
                'z-index': '10000000',
                superposition: false
            }, options );

        var calculateTop = function($currentStuckTag, index){
            if(!settings.superposition && index){
                var $previousStuckTag = $stuckableTags.eq(index-1);
                if($previousStuckTag.length){
                    return parseFloat($previousStuckTag.css('top')) + $previousStuckTag.outerHeight() + parseFloat($currentStuckTag.css('margin-top'));
                }
            }
            return parseFloat(settings.top);
        };

        var isStuckable = function(position, $tag, tagIndex){
            return position + calculateTop($tag, tagIndex) >= $tag.data('initial-offset').top
        };

        $(window).scroll(function(){
                    var position = $(this).scrollTop();
                    $stuckableTags.each(function(index){
                        var $this = $(this);
                        if(isStuckable(position, $this, index)){
                            if($this.hasClass('unstuck')){
                                $this.trigger('stick', position);
                            }
                        }else if($this.hasClass('stuck')){
                            $this.trigger('unstick', position);
                        }
                    });
                })
                .resize(function(){
                    var $stuckTags = $stuckableTags.filter('.stuck');
                    $stuckTags.trigger('unstick');
                    $stuckableTags.each(function(){
                        var $this = $(this);
                        $this.data('initial-offset', $this.offset());
                    });
                    $stuckTags.trigger('stick');
                });

        return $stuckableTags.each(function(index){
            var $this = $(this);
            $this.data('initial-offset', $this.offset())
                .addClass('unstuck')
                .on('stick', function(){
                    var $this = $(this);
                    var $clone = $this.clone();
                    $this.after($clone).data('clone', $clone);
                    $this.toggleClass('stuck unstuck').css({
                        position: 'fixed',
                        top: calculateTop($this, index),
                        width: settings.width,
                        'z-index': settings['z-index']
                    });
                })
                .on('unstick', function(){
                    var $this = $(this);
                    $this.data('clone').remove();
                    $this.toggleClass('stuck unstuck').css({
                        position: 'inherit',
                        top: 'inherit',
                        width: 'inherit',
                        'z-index': 'inherit'
                    });
                });
        });

    };

})( jQuery, window );
