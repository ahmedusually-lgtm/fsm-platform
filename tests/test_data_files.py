import json
import os

def test_sample_data_files_exist():
    data_dir = os.path.join(os.path.dirname(__file__), '../data')
    assert os.path.isdir(data_dir), "Data directory should exist"
    files = os.listdir(data_dir)
    assert len(files) > 0, "Data directory should contain JSON files"
    for fname in files:
        path = os.path.join(data_dir, fname)
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        assert isinstance(data, list), f"Data file {fname} should contain a list"