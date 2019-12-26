# -*- coding: utf-8 -*-

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    context={}
    return render_template('index.html', context=context)


if __name__ == '__main__':
    app.run(debug=True, port=8000)
