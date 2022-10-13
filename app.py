from flask import Flask
from perlin_noise import PerlinNoise
import random

seed = random.randint(1000000, 9999999)
noise = PerlinNoise(octaves=10, seed=seed)
# create flask app that returns perlin noise for a given x,y coordinate
app = Flask(__name__)


@app.route("/<int:x>/<int:y>")
def perlin(x, y):
    return str(round(noise([x/300, y/300]) * 30))


if __name__ == "__main__":
    app.run()
