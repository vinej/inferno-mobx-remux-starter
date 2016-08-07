import { action } from 'mobx'
import { appState } from '../stores/app_state'

export default class SignInUpValidator {
  static next(action) {
    if (action.next != null) {
      action.next(action)
    }
  }

  @action
  init(action) {
    const state = appState.signInUp
    //state.email = '';
    state.emailError = '';
    state.password = '';
    state.passwordError = '';
    //state.name = '';
    state.nameError = '';
    state.confirmPassword = '';
    state.confirmPasswordError = '';
    state.error = '';
    state.isError = false;
  }

  @action
  validateEmail(action) {
    // simulate a called to the backend.
    setTimeout( function() {
      const state = appState.signInUp
      state.emailError = ''
      if ( state.email === '') {
        state.emailError = 'Email is required'
        state.isError = true
      }
      SignInUpValidator.next(action)
    }, 100)
  }

  @action
  validatePassword(action) {
    const state = appState.signInUp
    state.passwordError = ''
    if ( state.password === '') {
      state.passwordError = 'Password is required'
      state.isError = true
    }
    SignInUpValidator.next(action)
  }

  @action
  validateConfirmPassword(action) {
    const state = appState.signInUp
    state.confirmPasswordError = ''
    if ( state.confirmPassword === '') {
      state.confirmPasswordError = 'ConfirmPassword is required'
      state.isError = true
    }

    if (state.password != state.confirmPassword) {
      state.confirmPasswordError = 'Both passwords are not equal'
      state.isError = true
    }
    SignInUpValidator.next(action)
  }

  @action
  validateName(action) {
    const state = appState.signInUp
    state.nameError = ''
    if ( state.name === '') {
      state.nameError = 'Name is required'
      state.isError = true
    }
    SignInUpValidator.next(action)
  }
}
export let signInUpValidator = new SignInUpValidator()
