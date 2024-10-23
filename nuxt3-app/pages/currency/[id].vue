<script setup>
const route = useRoute()
const { data } = await useFetch('/api/ticker/?id=' + route.params.id)
const coin = data.value[0]
</script>

<template>
  <div>
    <h2>{{ coin.name }} Detail Page</h2>
    <table border="1 px solid">
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Rank</th>
                <th>Price - US $</th>
                <th>Market Cap - US $</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ coin.symbol }}</td>
                <td>{{ coin.rank }}</td>
                <td>{{ coin.price_usd }}</td>
                <td>{{ coin.market_cap_usd }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<style>

</style>