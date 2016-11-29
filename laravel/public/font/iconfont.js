;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M481.2247 761.8601v-13.485056c0-3.5912 0.2785-7.8213 0.8776-12.6085H267.5988480000001c-15.0426 0-27.9306-5.3473-38.6232-16.1208-10.7336-10.7735-16.0799-23.9391-16.0799-39.5008 0-15.5607 5.3463-28.8881 16.0799-39.979 10.6926-11.092 23.5807-16.599 38.6232-16.599h252.68735999999998c21.9853-35.3505 51.113-63.5218 87.2612-84.4288 36.1912-20.9869 76.0095-31.4409 119.422-31.4409 4.6275 0 9.5365 0.1597 14.762 0.4792 5.1866 0.2386 10.4141 0.7178 15.6406 1.3558V286.81011199999995h-126.80192c-16.1987 0-30.0851-3.7509-41.6963-11.2517-11.5702-7.5018-20.9469-16.7578-28.2092-27.8508-7.2223-11.0121-12.5686-23.1414-16.0399-36.309-3.4724-13.1666-5.2265-25.4566-5.2265-36.8671V62.331903999999994H293.77331200000003 206.830592h-69.905408c-8.3395 0-16.6779 3.2717-23.0216 9.815-6.3846 6.6232-9.5365 15.2412-9.5365 23.8602v82.11456 31.202304 549.105664h-0.039936v113.31686400000001c0 8.619 3.1918 17.236 9.5365 23.8602 6.3437 6.5444 14.6831 9.8161 23.0216 9.8161h77.08672c0.7987 0.0778 1.5964 0.0778 2.3941 0.0778h308.268032c-13.8854-20.3479-24.5791-42.6107-32.1198-66.8723C484.9756 814.3698 481.2247 788.7544 481.2247 761.8601zM228.9756 415.2084c10.6926-10.7725 23.5807-16.1188 38.6232-16.1188h325.62585600000006c15.0426 0 27.9306 5.3463 38.6621 16.1188 10.6947 10.7735 16.0399 23.9401 16.0399 39.5018 0 15.5607-5.3453 28.887-16.0399 39.98-10.7305 11.092-23.6186 16.598-38.6621 16.598H267.5988480000001c-15.0426 0-27.9306-5.506-38.6232-16.598-10.7336-11.093-16.0799-24.4193-16.0799-39.98C212.8957 439.1485 218.242 425.982 228.9756 415.2084z"  ></path>'+
      ''+
      '<path d="M906.282 686.3688c-10.1335-23.9391-23.9022-44.8471-41.258-62.8019s-37.6248-32.2386-60.7683-42.6926c-23.1414-10.454-48.0399-15.7204-74.6926-15.7204-26.0526 0-50.6327 5.2664-73.815 15.7204-23.1414 10.454-43.4104 24.7378-60.7693 42.6926-17.3548 17.9548-31.1214 38.8628-41.2559 62.8019-10.1335 23.9411-15.2023 49.3978-15.2023 76.3699 0 27.5302 5.0678 53.3064 15.2023 77.2475 10.1345 23.9391 23.9012 44.8471 41.2559 62.8019 17.3588 17.9558 37.6279 32.2386 60.7693 42.6926 23.1823 10.454 47.7624 15.7204 73.815 15.7204 26.6527 0 51.5523-5.2664 74.6926-15.7204 23.1434-10.454 43.4125-24.7368 60.7683-42.6926 17.3558-17.9548 31.1245-38.8628 41.258-62.8019 10.1345-23.9411 15.2023-49.7172 15.2023-77.2475C921.4833 735.7676 916.4165 710.3099 906.282 686.3688zM669.4339 860.0156c-5.3873 5.1876-11.9695 7.8213-19.7509 7.8213-7.8213 0-14.3636-2.6327-19.7898-7.8213-5.3873-5.1876-8.0589-11.5712-8.0589-19.073 0-7.5796 2.7116-13.8854 8.0589-19.1519l59.2916-57.2948-59.2916-58.1765c-5.3873-5.1855-8.0589-11.5692-8.0589-19.071 0-7.5817 2.6716-13.8854 8.0589-19.1519 5.4262-5.1866 11.9685-7.8203 19.7898-7.8203 7.7814 0 14.3636 2.6327 19.7509 7.8203l60.1293 57.3768 59.2916-57.3768c5.3873-5.1866 11.9695-7.8203 19.7509-7.8203 7.7793 0 14.3636 2.6327 19.7509 7.8203 5.3873 5.2675 8.0978 11.5702 8.0978 19.1519 0 7.5018-2.7105 13.8854-8.0978 19.071l-59.2527 58.1765 59.2527 57.2948c5.3873 5.2675 8.0978 11.5722 8.0978 19.1519 0 7.5018-2.7105 13.8854-8.0978 19.073s-11.9716 7.8213-19.7509 7.8213c-7.7814 0-14.3636-2.6327-19.7509-7.8213l-59.2916-57.2969L669.4339 860.0156z"  ></path>'+
      ''+
      '<path d="M659.1396 229.3535h0.15872 98.07360000000001v-14.363648V96.00716800000001c0-8.619-3.1908-17.237-9.5355-23.8602-6.3836-6.5444-14.7231-9.815-23.0615-9.815H595.8584319999999h-1.757184-0.077824v99.670016c0 17.237 6.3416 34.474 19.07 47.6406C625.8227 222.7302 642.5006 229.3535 659.1396 229.3535z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M509.786112 954.360832c-247.8336 0-448.744448-200.977408-448.744448-448.760832 0-247.8336 200.910848-448.744448 448.744448-448.744448 247.870464 0 448.746496 200.910848 448.746496 448.744448C958.532608 753.384448 757.656576 954.360832 509.786112 954.360832L509.786112 954.360832zM715.584512 374.738944c8.394752-8.443904 8.394752-22.11328 0-30.507008l-45.809664-45.879296c-8.46336-8.393728-22.114304-8.393728-30.575616 0L509.348864 428.203008 379.599872 298.35264c-8.495104-8.393728-22.147072-8.393728-30.608384 0l-45.77792 45.879296c-8.42752 8.393728-8.42752 22.063104 0 30.507008l129.816576 129.833984L303.213568 634.372096c-8.42752 8.426496-8.42752 22.11328 0 30.574592l45.77792 45.77792c8.460288 8.477696 22.11328 8.477696 30.608384 0L509.348864 580.908032l129.850368 129.816576c8.462336 8.477696 22.11328 8.477696 30.575616 0l45.809664-45.77792c8.394752-8.462336 8.394752-22.148096 0-30.574592L585.735168 504.571904 715.584512 374.738944 715.584512 374.738944z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shanchu1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M704 384l-64 0 0 448 64 0L704 384zM896 192l-192 0c0-106.048-86.016-192-192-192C405.952 0 320 85.952 320 192L128 192C92.672 192 64 220.608 64 256s28.672 64 64 64l0 512c0 106.048 85.952 192 192 192l384 0c105.984 0 192-85.952 192-192L896 320c35.392 0 64-28.608 64-64S931.392 192 896 192zM512 128c35.392 0 64 28.608 64 64L448 192C448 156.608 476.672 128 512 128zM768 832c0 35.392-28.608 64-64 64L320 896c-35.328 0-64-28.608-64-64L256 320l512 0L768 832zM576 384 448 384l0 448 128 0L576 384zM384 384 320 384l0 448 64 0L384 384z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-circle-delete" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.001955 23.458171C235.717479 23.458171 11.710515 247.456339 11.710515 523.729086c0 276.272747 224.006964 500.270914 500.29144 500.270914 276.284476 0 500.289485-223.998167 500.289485-500.270914 0-276.272747-224.005987-500.270914-500.289485-500.270914zm0 906.741399C287.505301 930.19957 105.515832 748.216942 105.515832 523.729086c0-224.486879 181.988492-406.470484 406.486123-406.470484C736.494699 117.258601 918.487101 299.242206 918.487101 523.729086 918.486123 748.215965 736.495676 930.19957 512.001955 930.19957Z"  ></path>'+
      ''+
      '<path d="M733.164616 665.884577l-132.679416-132.679416 132.679416-132.679456-88.452944-88.515499-132.679416 132.741972-132.679416-132.741972-88.515499 88.515499 132.741972 132.679456-132.741972 132.679416 88.515499 88.452944 132.679416-132.679416 132.679416 132.679416z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon54" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M126.867456 296.924573l107.036805 549.677111c11.655458 53.741995 41.550325 95.562473 92.440365 95.562473l371.235023 0c50.890041 0 80.784908-41.821501 92.440365-95.562473l107.036805-549.677111L126.867456 296.924573z"  ></path>'+
      ''+
      '<path d="M677.410284 148.016125 628.282377 81.836867 395.642922 81.836867 346.515015 148.016125 65.253166 148.016125 65.253166 230.740198 958.672132 230.740198 958.672132 148.016125Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tianjia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M884.949572 585.300446 140.765489 585.300446c-41.131793 0-74.454736-33.431414-74.454736-74.420967 0-41.205471 33.32192-74.489528 74.454736-74.489528l744.184083 0c41.131793 0 74.417897 33.284057 74.417897 74.489528C959.367469 551.869033 926.081365 585.300446 884.949572 585.300446L884.949572 585.300446zM512.858042 957.317275c-41.099047 0-74.416873-33.284057-74.416873-74.344219L438.441169 138.753157c0-41.170678 33.317827-74.454736 74.416873-74.454736 40.989553 0 74.416873 33.283034 74.416873 74.454736L587.274916 882.973056C587.273892 924.033217 553.846572 957.317275 512.858042 957.317275L512.858042 957.317275z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tianjia1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1023.978007 566.255695c0 28.080545-22.781866 50.859341-50.866505 50.859341l-356.021529-0.01228 0 356.036879c0 28.074406-22.778796 50.853202-50.853202 50.859341l-101.728916-0.00614c-28.087709 0.00614-50.863435-22.778796-50.863435-50.859341L413.644421 617.102756l-356.021529 0.01228c-28.090778 0-50.859341-22.772656-50.859341-50.866505l0.00307-101.722776c0-28.084639 22.775726-50.866505 50.856271-50.859341l356.027669 0-0.00614-356.018459c0.00614-28.093848 22.778796-50.866505 50.869574-50.866505l101.713566 0c28.093848 0.00307 50.856271 22.775726 50.866505 50.866505l-0.00921 356.018459 356.018459 0c28.093848 0 50.875714 22.778796 50.875714 50.866505L1023.978007 566.255695 1023.978007 566.255695z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M816.17542 374.096231c-15.24971 0-27.633702 12.383993-27.633702 27.633702l0 483.999179c0 45.749129-37.254325 83.003454-83.003454 83.003454L373.729141 968.732566c-45.749129 0-83.003454-37.254325-83.003454-83.003454L290.725687 401.729933c0-15.24971-12.383993-27.633702-27.633702-27.633702-15.24971 0-27.633702 12.383993-27.633702 27.633702l0 483.999179C235.458283 961.977661 297.480592 1023.99997 373.729141 1023.99997l331.911469 0c76.248549 0 138.270859-62.02231 138.270859-138.270859L843.911469 401.729933C843.911469 386.480223 831.527476 374.096231 816.17542 374.096231z"  ></path>'+
      ''+
      '<path d="M428.996546 885.524418l0-386.871833c0-15.24971-12.383993-27.633702-27.633702-27.633702-15.24971 0-27.633702 12.383993-27.633702 27.633702l0 386.871833c0 15.24971 12.383993 27.633702 27.633702 27.633702C416.612553 913.260467 428.996546 900.876474 428.996546 885.524418z"  ></path>'+
      ''+
      '<path d="M567.267405 885.524418l0-386.871833c0-15.24971-12.383993-27.633702-27.633702-27.633702C524.383993 471.018883 512 483.402875 512 498.754932l0 386.871833c0 15.24971 12.383993 27.633702 27.633702 27.633702C554.985759 913.260467 567.267405 900.876474 567.267405 885.524418z"  ></path>'+
      ''+
      '<path d="M705.64061 885.524418l0-386.871833c0-15.24971-12.383993-27.633702-27.633702-27.633702-15.24971 0-27.633702 12.383993-27.633702 27.633702l0 386.871833c0 15.24971 12.383993 27.633702 27.633702 27.633702C693.256618 913.260467 705.64061 900.876474 705.64061 885.524418z"  ></path>'+
      ''+
      '<path d="M895.187339 151.082018 881.677529 97.452166c-11.053481-44.418618-56.188528-71.438238-100.607146-60.384757L566.448628 90.799608 559.489029 62.858865c-11.053481-44.418618-56.290875-71.438238-100.607146-60.384757-44.418618 11.053481-71.438238 56.188528-60.384757 100.607146L405.559073 131.021997 190.834971 184.754196c-44.418618 11.053481-71.438238 56.188528-60.384757 100.607146l13.407463 53.629852C147.644518 353.831516 162.689533 362.838056 177.529855 359.153562l697.597463-174.501713C889.865292 180.967355 898.871833 165.92234 895.187339 151.082018zM472.289346 56.206307C487.129668 52.521813 502.174684 61.528353 505.859177 76.368675l6.959599 27.838396L459.188924 117.614534 452.229325 89.776138C448.442485 74.935816 457.449025 59.8908 472.289346 56.206307zM190.937318 298.768805 184.182413 271.953879C180.497919 257.113557 189.504459 242.068542 204.242434 238.384048L794.477846 90.697261c14.840322-3.684494 29.885337 5.322046 33.569831 20.162368L834.802582 137.674555 190.937318 298.768805z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shanchu1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M0 204.8l0-68.28 273.067 0L273.067 0l477.867 0 0 136.52L1024 136.52l0 68.28L0 204.8zM682.667 68.267 341.333 68.267l0 68.28 341.333 0L682.666 68.267zM341.333 409.6l0 341.32-68.267 0L273.066 409.6 341.333 409.6zM546.133 341.32 546.133 819.2l-68.267 0L477.866 341.32 546.133 341.32zM750.933 409.6l0 341.32-68.267 0L682.666 409.6 750.933 409.6zM136.533 887.467c0 37.711 30.556 68.253 68.267 68.253l614.4 0c37.697 0 68.267-30.542 68.267-68.253l0-614.4 68.267 0 0 614.4C955.733 962.86 894.607 1024 819.2 1024L204.8 1024c-75.407 0-136.533-61.14-136.533-136.533l0-409.6L68.267 341.32l0-68.253 68.267 0L136.534 887.467z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfonticonfontclose" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M557.312 525.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84c-12.448-12.48-32.704-12.544-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.28l262.976 263.776-265.152 263.744c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248l-265.376-266.176z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shanchu1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM800 557.44l-576 0 0-96 576 0L800 557.44z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
