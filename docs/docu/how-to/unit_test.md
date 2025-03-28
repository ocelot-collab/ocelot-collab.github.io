---
sidebar_position: 2
title: Add Unit Test
description: How to create new unit test
---

# How to Add a Unit Test

Writing unit tests is essential to maintain code quality and ensure your contributions work as expected. This guide shows how to write both simple and more complex tests in the Ocelot project.

## 1. Where to Put Your Tests

All unit tests are located in the [`unit_tests/`](https://github.com/ocelot-collab/ocelot/tree/master/unit_tests) directory. Organize your tests in a folder that matches the module or functionality you're testing.

For example:
```
unit_tests/
  ebeam_test/
    matching/
      match_test.py
      match_conf.py
    csr_ex/
      csr_ex_test.py
      csr_ex_conf.py
      ref_results/
```

## 2. Writing Simple Unit Tests

Here are a few simple examples to help you get started:

```python
def test_Twiss_to_series(a_twiss_instance, a_twiss_dictionary):
    twiss = a_twiss_instance
    assert dict(twiss.to_series()) == a_twiss_dictionary
```

```python
def test_particle_array_total_charge():
    parray = ParticleArray(2)
    parray.q_array[0] = 1e-14
    parray.q_array[1] = 5e-14
    assert parray.total_charge == 6e-14
```
Examples above were taken from [here](https://github.com/ocelot-collab/ocelot/blob/master/unit_tests/cpbd/test_beam.py).
More simple unit tests can be found [here](https://github.com/ocelot-collab/ocelot/tree/master/unit_tests/cpbd) 

## 3. Writing Complex and Specialized Tests

More advanced tests in Ocelot often cover:
- Accelerator lattice matching and beam optics
- Particle tracking with and without collective effects
- Use of reference results to ensure reproducibility

### Fixtures in `*_conf.py`
Configuration and fixtures such as lattice definitions or beam setups are placed in files like 
[`match_conf.py`](https://github.com/ocelot-collab/ocelot/blob/master/unit_tests/ebeam_test/matching/match_conf.py) or 
[`csr_ex_conf.py`](https://github.com/ocelot-collab/ocelot/blob/master/unit_tests/ebeam_test/csr_ex/csr_ex_conf.py). These use `pytest.fixture` and are imported into test scripts.

### Tests with Matching and Twiss Parameters
Files like [`match_test.py`](https://github.com/ocelot-collab/ocelot/blob/master/unit_tests/ebeam_test/matching/match_test.py) demonstrate tests for lattice optics and matching algorithms. They rely on:
- Reference [Twiss](../OCELOT%20fundamentals/twiss.md) or matrix results (in `ref_results/`)
- [Matching functions](../OCELOT%20fundamentals/matching.md) that alter element parameters to satisfy constraints
- Optional regeneration of reference results with `update_ref_values=True`

### Tests with Collective Effects (CSR, etc.)
Files like [`csr_ex_test.py`](https://github.com/ocelot-collab/ocelot/blob/master/unit_tests/ebeam_test/csr_ex/csr_ex_test.py) demonstrate tests for collective effects such as [**Coherent Synchrotron Radiation (CSR)**](../physics-processes/csr.md). These tests:
- Track [`ParticleArray`](../OCELOT%20fundamentals/particle-array.md) through lattices
- Enable [CSR](../physics-processes/csr.md) as a physics process via [`Navigator`](../OCELOT%20fundamentals/navigator.md)
- Compare final [Twiss](../OCELOT%20fundamentals/twiss.md) and particle distributions with reference outputs

Example test with CSR:
```python
csr = CSR()
csr.energy = p_array.E
navi = Navigator(lattice)
navi.add_physics_proc(csr, lattice.sequence[0], lattice.sequence[-1])
tws_track, p_array = track(lattice, p_array, navi)
```

You can compare results like this:
```python
p = obj2dict(p_array)
p_ref = json_read("ref_results/test_track_with_csr0.json")
result = check_dict(p, p_ref, tolerance=1e-8)
assert check_result(result)
```

### Parametrized Tests
Some tests use `@pytest.mark.parametrize` to check several variations of the same logic. For example:
```python
@pytest.mark.parametrize('parameter', [0, 1])
def test_track_with_and_without_tilt(lattice, parameter):
    if parameter == 1:
        # apply tilt to bends
```

### Auto-updating Reference Results
All advanced tests can support regenerating expected outputs by passing `update_ref_values=True`. There's also a central function marked with `@pytest.mark.update` to handle this:

```python
@pytest.mark.update
def test_update_ref_values(lattice, p_array, cmdopt):
    result = eval(cmdopt)(lattice, p_array, ..., update_ref_values=True)
    json_save(result, f"ref_results/{cmdopt}.json")
```

### Logging and Timing
Tests can log performance using `setup_function`, `teardown_function`, and global `pytest` objects to record timings and output to logs.

---

## 4. Running Tests

To run all tests:
```bash
python -m pytest unit_tests
```

To run a single test file (EXAMPLE):
```bash
python -m pytest unit_tests/ebeam_test/matching/match_test.py
```

To run a single test from specific file (example for match_test.py)
```bash
python3 -m pytest unit_tests/ebeam_test/matching/match_test.py::TEST_FUNCTION
```
To update reference results for one test:
```bash
python -m pytest unit_tests/.../filename_test.py --update=TEST_FUNCTION
```

Example for match_tes.py 
```bash
python -m pytest unit_tests/ebeam_test/matching/match_test.py --update=test_drift_match
```

## 5. Tips

- Keep long or reusable structures in `*_conf.py` as `pytest` fixtures.
- Use `json_save`, `json_read`, `obj2dict`, and `numpy2json` for test data.
- Use `check_value`, `check_matrix`, and `check_dict` or numpy testing function to compare results.
- Use `copy.deepcopy()` when modifying lattice or particle arrays to avoid state corruption between tests.

---

If you’re unsure how to structure a test, reach out or refer to existing tests under [`unit_tests/ebeam_test/`](https://github.com/ocelot-collab/ocelot/tree/master/unit_tests/ebeam_test). Each test is a contribution to the long-term stability of Ocelot.

Happy testing!

