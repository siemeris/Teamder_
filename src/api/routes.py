"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Activities
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/addActivity', methods=['POST'])
@jwt_required()
def addActivity():
    request_body = request.get_json(force=True)
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    activity = Activities(category = request_body["category"], name = request_body["title"], players = request_body["participants"], date = request_body["date"], city = request_body["city"], location = request_body["location"], time = request_body["time"], user_id = user.id, latitude = request_body["latitude"], longitude = request_body["longitude"],)
    db.session.add(activity)
    db.session.commit()
    return jsonify(), 200

@api.route('/getAllActivities', methods=['GET'])
def obtenerActivity():
    act_query = Activities.query.all()
    all_activities = list(map(lambda x: x.serialize(), act_query))
    response_body = {
        "result": all_activities
    }    
    return jsonify(response_body), 200

@api.route('/getPostedActivities', methods=['GET'])
@jwt_required()
def get_posted_activities():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    response = User.query.filter_by(id=user.id).first().postedactivities
    Actividades = list(map(lambda x: x.serialize(), response))
    return jsonify({
        "Posted_Activities": Actividades,
    }), 200

@api.route('/getTargetActivities', methods=['GET'])
@jwt_required()
def get_target_activities():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    response = User.query.filter_by(id=user.id).first().activities
    Actividades = list(map(lambda x: x.serialize(), response))
    return jsonify({
        "Target_Activities": Actividades,
    }), 200

@api.route('/joinActivity', methods=['POST'])
@jwt_required()
def join_activity():
    request_body = request.get_json(force=True)
    activity_id = request_body["index"]
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    actividad = Activities.query.get(activity_id)
    listaActividades = User.query.filter_by(id=user.id).first().activities
    listaActividades.append(actividad)
    db.session.commit()

    return jsonify({
        "success": "activity added",
        "ActividadesAnotadas": list(map(lambda x: x.serialize(), listaActividades))
    }), 200

@api.route('/signup', methods=['POST'])
def signup():
    request_body = request.get_json(force=True)
    user = User( name = request_body["name"], username = request_body["username"], lastname = request_body["lastname"], age = request_body["age"], gender = request_body["gender"],email = request_body["email"], password = request_body["password"])
    db.session.add(user)
    db.session.commit()
    return jsonify(), 200


@api.route("/token", methods=["POST"])
def create_token():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Consulta la base de datos por el nombre de usuario y la contraseña
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
    # el usuario no se encontró en la base de datos
        return jsonify({"msg": "Bad username or password"}), 401
    
    # crea un nuevo token con el id de usuario dentro
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

# Protege una ruta con jwt_required, bloquea las peticiones
# sin un JWT válido presente.
@api.route("/privated", methods=["GET"])
@jwt_required()
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email }), 200

