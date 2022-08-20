from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    age = db.Column(db.String(120), nullable=False)
    gender= db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
#     mobile= db.Column(db.Integer, unique=True, nullable=False)
#     address = db.Column(db.String(80), nullable=False)
#     is_active = db.Column(db.Boolean, nullable=False)
    #activities = db.relationship('Activities', backref='user', lazy=True)
    def __repr__(self):
         return '<User {self.email}>'
    
    def serialize(self):
         return {
             "id": self.id,
             "username": self.id,
             "name": self.name,
             "lastname": self.lastname,
             "age": self.age,
             "gender": self.gender,
             "email": self.email,
             "password": self.password,
             "mobile": self.mobile,
             "address": self.address,
          #    "activities": obtain_activities()
         }

#     def obtain_activities(self):
#         return list(map(lambda x: x.serialize(), self.activities))

class Activities(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(120), nullable=False)
    category=db.Column(db.String(120), nullable=False)
    date= db.Column(db.String(120), nullable=False)
    time=db.Column(db.String(120), nullable=False)
    city = db.Column(db.String(120), nullable=False)
    location = db.Column(db.String(120), nullable=False)
    # weather = db.Column(db.String(120), nullable=True)
    players = db.Column(db.Integer, nullable=False)
    latitude = db.Column(db.String(120), nullable=True)
    longitude = db.Column(db.String(120), nullable=True)
    # user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
    #     nullable=False)
    def __repr__(self):
         return '<User {self.name}>'
    def serialize(self):
         return {
             "id": self.id,
             "name": name.id,
             "category": category.db,
             "date": date.db,
             "time": time.db,
             "city": city.db,
             "location": location.db,
            #  "weather": weather.db,
             "players": players.db,
             "latitude": latitude.db,
             "longitude": longitude.db,
            #  "user_id" : user_id.db,
         }

