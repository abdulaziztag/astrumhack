import React from 'react'
import { SafeAreaView, StyleSheet, View, FlatList, Image} from 'react-native';

const images = {
  a: {
    source: require('../../assets/a.jpg')
  },
  b: {
    source: require('../../assets/b.jpg')
  },
  c: {
    source: require('../../assets/c.jpg')
  },
  d: {
    source: require('../../assets/d.jpg')
  },
  e: {
    source: require('../../assets/e.jpg')
  },
  f: {
    source: require('../../assets/f.jpg')
  },
  g: {
    source: require('../../assets/g.jpg')
  },
  h: {
    source: require('../../assets/h.jpg')
  },
  i: {
    source: require('../../assets/i.jpg')
  },
  j: {
    source: require('../../assets/j.jpg')
  },
  k: {
    source: require('../../assets/k.jpg')
  },
  l: {
    source: require('../../assets/l.jpg')
  },
  m: {
    source: require('../../assets/m.jpg')
  },
  n: {
    source: require('../../assets/n.jpg')
  },
  o: {
    source: require('../../assets/o.jpg')
  },
  p: {
    source: require('../../assets/p.jpg')
  },
  q: {
    source: require('../../assets/q.jpg')
  },
  r: {
    source: require('../../assets/r.jpg')
  },
  s: {
    source: require('../../assets/s.jpg')
  },
  t: {
    source: require('../../assets/t.jpg')
  },
  u: {
    source: require('../../assets/u.jpg')
  },
  v: {
    source: require('../../assets/v.jpg')
  },
  w: {
    source: require('../../assets/w.jpg')
  },
  x: {
    source: require('../../assets/x.jpg')
  },
  y: {
    source: require('../../assets/y.jpg')
  },
  z: {
    source: require('../../assets/z.jpg')
  }
}

export const TranslatedGestures = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.text}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            <Image style={styles.img} source={images[item]?.source || images[item.toLowerCase()]?.source} />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red'
  },
  container: {
    flex: .63,
    marginTop: 8
  }
})
