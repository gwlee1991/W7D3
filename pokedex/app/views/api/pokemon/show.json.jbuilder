json.poke do
  json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type
end

json.items @pokemon.items do |item|
  json.id item.id
  json.name item.name
  json.pokemon_id item.pokemon_id
  json.price item.price
  json.happiness item.happiness
  json.image_url item.image_url
end
