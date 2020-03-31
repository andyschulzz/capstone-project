import React from 'react'
import * as S from './Form.styles'
import PropTypes from 'prop-types'

Form.propTypes = {
  disabled: PropTypes.bool,
  register: PropTypes.func.isRequired,
  image: PropTypes.string,
  mainRef: PropTypes.object.isRequired,
}

export default function Form({ disabled = true, register, image, mainRef }) {
  return (
    <S.Wrapper>
      <S.Textarea
        ref={(e) => {
          register(e, { required: true, minLength: 4, maxLength: 50 })
          mainRef.current = e
        }}
        isTitle
        isExerciseName
        type="text"
        name="name"
        id="name"
        placeholder="Name of the exercise?"
        required
        minLength="4"
        maxLength="50"
        disabled={disabled}
      />
      {image && <img alt="" src={image} />}
      <S.Label htmlFor="type">Type</S.Label>
      <S.Textarea
        ref={register({ required: true, minLength: 4, maxLength: 30 })}
        isTitle
        type="text"
        name="type"
        id="type"
        placeholder="Type of the exercise?"
        required
        minLength="4"
        maxLength="30"
        disabled={disabled}
      />
      <S.Label htmlFor="instructions">Instructions</S.Label>
      <S.Textarea
        ref={register({ required: true, minLength: 4 })}
        type="text"
        name="instructions"
        id="instructions"
        placeholder="Please explain the exercise!"
        required
        minLength="4"
        disabled={disabled}
      />
    </S.Wrapper>
  )
}
