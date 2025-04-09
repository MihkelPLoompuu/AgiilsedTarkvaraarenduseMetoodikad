name: python-ci
on:[push]
jobs:
 build:
   runs-pn:ubuntu-latest

 steps:
   -uses: actions/checkout@v2
   -name: pythoni instalerimine
   uses: actions/setup-python@v2
   with:
    python-version: 3.9

   -name: installida Dependencies:
   run: pip install pytest

   -name: käivitada testid
   run: pytest
 
