import assign from 'object-assign'

export default function(ReactClass, mixin){

  if (mixin.contextTypes){
    ReactClass.contextTypes = mixin.contextTypes
  }

  assign(ReactClass.prototype, mixin)

  delete ReactClass.prototype.contextTypes

  return ReactClass
}
