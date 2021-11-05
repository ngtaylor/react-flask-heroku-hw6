# app.py
# Backend for react-flask-heroku deployment app
# EE461L HW6

from flask import Flask, jsonify, request
from flask.json import jsonify
from flask.helpers import send_from_directory
#from flask_cors import  CORS

names = {
    "Nick" : "Taylor",
    "Bob" : "Ross",
    "Peter" : "Parker"
}

app = Flask(__name__, static_folder="frontend/build", static_url_path="")
#CORS(app)

@app.route('/app/<name>', methods=['GET'])
def output(name: str):
    lastName = ""
    if(name in names):
        lastName = names[name]
    else:
        lastName = "User Not Found"
    return jsonify({'lastName' : lastName})

@app.route('/')
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run()
    