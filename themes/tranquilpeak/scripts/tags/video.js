(function() {
  'use strict';
  
  /**
   * search index in an array with a regex
   * @param {Array} array
   * @param {Regex} regex
   * @param {Number} startpos
   * @return {Number}
   */
  function reIndexOf(array, regex) {
    for (var i in this) {
      if (array[i].toString().match(regex)) {
        return i;
      }
    }
    return -1;
  }

  var rClass = /^[_a-zA-Z0-9-]+$/;
  var rSize = /^\d+(?:|\.\d+)(?:px|%)?$/;
  var rFigClass = /(^fig-\d{2,3}$|^center$)/;
  var figureClass = 'figure';
  var captionClass = 'caption';
  var noCaptionClass = 'nocaption';
  var clearClass = 'clear';
  /**
   * Video tag
   *
   * Syntax:
   *     {% video [classes] /path/to/video
   *     [width] [title text] %}
   * E.g:
   *     {% video fig-50 right http://example.com/video145.mp4
   *     100% "A beautiful sunrise" %}
   */
  hexo.extend.tag.register('video', function(args) {
    var original;
    var thumbnailWidth = '';
    var thumbnailHeight = '';
    var classes = [];
    var html = '';
    var clear = '';
    // Get CSS classes
    while (args.length && rClass.test(args[0])) {
      classes.push(args.shift());
    }
    
    // Get path of original video
    original = args.shift();
    
    // Get width of video
    if (args.length && rSize.test(args[0])) {
      thumbnailWidth = args.shift();
    }
    
    // Get height of video
    if (args.length && rSize.test(args[0])) {
      thumbnailHeight = args.shift();
    }
    
    // Get title of video
    var title = args.join(' ');

    // Build the video HTML structure
    var video = '<video autoplay loop muted ';
    // add size
    if (thumbnailWidth || thumbnailHeight) {
      video += 'style="';
      // add width
      if (thumbnailWidth) {
        video += 'width:' + thumbnailWidth + ';';
      }
      // add height
      if (thumbnailHeight) {
        video += 'height:' + thumbnailHeight + ';';
      }
      video += '"';
    }
    video += 'alt="' + title + '">\n';
    video += '<source src="' + original + '" type="video/mp4">\n';
    video += '<p>Your browser doesn\'t support HTML5 Video :/</p>';
    video += '</video>';

    // Build div to retrieve normal flow of document
    if (classes.indexOf(clearClass) >= 0) {
      clear = '<div style="clear:both;"></div>';
      // remove `clear` class of `classes` to not be attached on the main div
      classes.splice(classes.indexOf(clearClass), 1);
    }
    
    // Build HTML structure
    html += '<div style="text-align:center;">';
    html += video;
    
    // Add caption
    if (title && classes.indexOf(noCaptionClass) === -1) {
      html += '<span class="' + captionClass + '">';
      html += title + '';
      html += '</span>';
    }
    
    html += '</div>';
    // add `clear` div
    html += clear;
    
    return html;
  });
})();
