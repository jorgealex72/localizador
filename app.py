from flask import Flask, render_template
import datetime
import geocoder

app = Flask(__name__)

@app.route('/')
def home():
    now = datetime.datetime.now()
    location = geocoder.ip('me').latlng  # Obtiene latitud y longitud
    return render_template('index.html', datetime=now, location=location)

if __name__ == '__main__':
    app.run(debug=True)
