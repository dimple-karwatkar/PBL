from flask import Flask, request, jsonify
from model import get_movie_recommendations

app = Flask(__name__)

@app.route("/recommendations", methods=["GET"])
def recommendations():
    user_id = request.args.get('userId')
    recommended_movies = get_movie_recommendations(user_id)
    return jsonify(recommended_movies)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
