import { put, call, takeLatest } from "redux-saga/effects"
import * as types from "../constants/ActionTypes"
import axios from "axios"

const API = "https://5ed9ab7c4378690016c6b212.mockapi.io/api/todos"

export function* getTodoData() {
  try {
    const res = yield call(axios.get, `${API}`)
    yield put({ type: types.GET_DATA_API_SUCCESS, res })
  } catch (e) {
    yield put({ type: types.GET_DATA_API_FAIL })
  }
}

export function* addTodo(action) {
  const newTodo = {
    title: action.todo.title,
    isComplete: false
  }
  try {
    yield call(axios.post, `${API}`, newTodo)
    yield put({ type: types.GET_DATA_API })
  } catch (e) {
    yield put({ type: types.GET_DATA_API_FAIL })
  }
}

export function* deleteTodo(action) {
  const id = action.todo.id
  try {
    yield call(axios.delete, `${API}/` + id)
    yield put({ type: types.GET_DATA_API })
  } catch (e) {
    yield put({ type: types.GET_DATA_API_FAIL })
  }
}

export function* completedTodo(action) {
  const todoComplete = { isComplete: !action.todo.isComplete }
  const id = action.todo.id
  try {
    yield call(axios.put, `${API}/` + id, todoComplete)
    yield put({ type: types.GET_DATA_API })
  } catch (e) {
    yield put({ type: types.GET_DATA_API_FAIL })
  }
}

export function* editTodo(action) {
  const editTodo = { title: action.title }
  const id = action.todo.id

  try {
    yield call(axios.put, `${API}/` + id, editTodo)
    yield put({ type: types.GET_DATA_API })
  } catch (e) {
    yield put({ type: types.GET_DATA_API_FAIL })
  }
}

export default function* todoSaga() {
  yield takeLatest(types.GET_DATA_API, getTodoData)
  yield takeLatest(types.ADD_TODO, addTodo)
  yield takeLatest(types.DELETE_TODO, deleteTodo)
  yield takeLatest(types.COMPLETE_TODO, completedTodo)
  yield takeLatest(types.EDIT_TODO, editTodo)
}
