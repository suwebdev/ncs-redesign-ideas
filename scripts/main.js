"use strict";$(document).on("ready",function(){$(document).on("click",".yamm .dropdown-menu",function(o){o.stopPropagation()}),$(".dropdown").on("show.bs.dropdown",function(o){$(this).find(".dropdown-menu").first().stop(!0,!0).slideDown(),console.log("sliding down")}),$(".dropdown").on("hide.bs.dropdown",function(o){$(this).find(".dropdown-menu").first().stop(!0,!0).slideUp(),console.log("sliding up")})});