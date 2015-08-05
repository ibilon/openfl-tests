# BlendMode test

Pictures can be found in the `results` folder.

Test made on the 5 of August 2015 with:
lime (2.5.2) https://github.com/openfl/lime/commit/bb24b234639990a18bd035f315d20d6d96f17697
openfl (3.2.2) https://github.com/openfl/openfl/commit/c1500601d1a90779490632fc88f9c9695d04d538

| BlendMode/Target | Neko next | Neko legacy | Html5 dom | Html5 canvas | Html5 webgl |
|------------------|-----------|-------------|-----------|--------------|-------------|
| ADD              | WORKS     |             |           |              | WORKS       |
| ALPHA            |           | WORKS       |           |              |             |
| DARKEN           |           |             |           |              |             |
| DIFFERENCE       |           |             |           |              |             |
| HARDLIGHT        |           |             |           |              |             |
| INVERT           |           |             |           |              |             |
| LAYER            |           |             |           |              |             |
| LIGHTEN          |           |             |           |              |             |
| MULTIPLY         | WORKS     |             |           |              | WORKS       |
| OVERLAY          |           |             |           |              |             |
| SCREEN           |           |             |           |              |             |
| SUBTRACT         | WORKS     |             |           |              |             |
