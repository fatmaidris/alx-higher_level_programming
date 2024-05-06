#!/usr/bin/python3
"""containing the "class_to_json" function"""


def class_to_json(obj):
    """returns the dictionary description the the simple data structure
    (list, dictionary, string, integer and boolean)
    for JSON serilization of an object"""
    return obj.__dict__
