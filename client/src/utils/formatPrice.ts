const regex = /\B(?=(\d{3})+(?!\d))/g
export const formatPrice = (price: any) => {
  if (price === null) {
    return ''
  } else {
    return '₹ ' + price?.toFixed(2).toString().replace(regex, ',')
  }
}
