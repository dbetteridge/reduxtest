from flask import Flask,Response,send_from_directory
from flask_cors import CORS, cross_origin
import re

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/src/data/<path:path>')
def media(path):
    return send_from_directory('./src/data', path)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')