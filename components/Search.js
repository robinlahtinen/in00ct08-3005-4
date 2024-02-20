import React, {useState} from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

export default function Search({executeSearch}) {
    const [search, setSearch] = useState('')

    return (
        <View style={styles.searchBox}>
            <TextInput
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder="Search..."
                returnKeyType="search"
                onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        marginTop: 100,
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 0.5,
        padding: 5,
    }
})
