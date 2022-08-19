"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Activities
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/addActivity', methods=['POST'])
def addActivity():
    request_body = request.get_json(force=True)
    activity = Activities(category = request_body["category"], name = request_body["title"], players = request_body["participants"], date = request_body["date"], city = request_body["city"], location = request_body["location"], time = request_body["time"],)

    db.session.add(activity)
    db.session.commit()
    return jsonify(), 200

@api.route('/obtenerActivity', methods=['GET'])
def obtenerActivity():
    response_body = "OK"
    return jsonify(response_body), 200



