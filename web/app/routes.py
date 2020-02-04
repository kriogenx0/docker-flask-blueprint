from flask import send_from_directory
from app import app

# API

# Projects
@app.route('/api/projects')
def projects_index():
    return "index"

@app.route('/api/projects', methods=['POST'])
def projects_create():
    return "create"

@app.route('/api/projects/<path:stuff>')
def projects_show():
    return "yo"

# Instances

# Pings

# ---

# SPA
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # return 'You want path: %s' % path
    return send_from_directory('static', 'index.html')
    # return app.send_static_file('static/index.html')
