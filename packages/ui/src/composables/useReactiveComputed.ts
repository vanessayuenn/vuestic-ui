import { computed, unref, WritableComputedOptions, isRef, reactive } from 'vue'

export const useReactiveComputed = <T extends object>(obj: WritableComputedOptions<T>) => {
  const objectRef = computed(obj)

  const proxy = new Proxy({}, {
    get (target, p: string, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver))
    },
    set (target, p, value) {
      if (isRef((objectRef.value as any)[p]) && !isRef(value)) {
        (objectRef.value as any)[p].value = value
      } else {
        (objectRef.value as any)[p] = value
      }
      return true
    },
    deleteProperty (target, p) {
      return Reflect.deleteProperty(objectRef.value, p)
    },
    has (target, p) {
      return Reflect.has(objectRef.value, p)
    },
    ownKeys () {
      return Object.keys(objectRef.value)
    },
    getOwnPropertyDescriptor () {
      return {
        enumerable: true,
        configurable: true,
      }
    },
  })

  return reactive(proxy) as T
}