https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight

Common weight name mapping

The 100 to 900 values roughly correspond to the following common weight names:


Thin (Hairline)			100

Extra Light(Ultra Light)200

Light 					300

Mormal 					400

Medium					500

Semi Bold (Demi Bold)	600

Bold 					700

Extra Bold (Ultra Bold) 800

Black (Heavy)			900
Interpolation

A font-weight value is interpolated via discrete steps (multiples of 100). The interpolation happens in real number space and is converted to an integer by rounding to the nearest multiple of 100, with values halfway between multiples of 100 rounded towards positive infinity.

Formal syntax

How to read CSS syntax.
font-width: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900