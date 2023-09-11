import { spinner as Loader } from "./svgImages"

const Color = {
    DarkGray: '#4B4A5B',
    TransparentGray: 'rgba(75, 74, 91, 0.7)',
    Red: '#F94144',
    HoverRed: '#E21725',
    Green: '#12AF85',
    Blue: '#13D1FB',
    Yellow: '#FBE207',
    BgLight: '#FFFBF7',
    White: '#FFFFFF',
    Ivory: 'rgb(248 239 227 / var(--tw-bg-opacity))'
}

const Button = ({ text, loading = false, disabled }) => {
  return (
    <button className="submit-btn" disabled={disabled}>
      {!loading ? text : <Loader className="spinner" />}
    </button>
  )
}

  module.exports = {
    Color,
    Button
  }