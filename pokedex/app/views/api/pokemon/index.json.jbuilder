@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name, :attack, :defense, :image_url, :moves, :poke_type
    json.image_url asset_path(poke.image_url)
    json.array poke.items do |item|
      json.id item.id
      json.name item.name
      json.pokemon_id item.pokemon_id
      json.image_url item.image_url
      json.price item.price
      json.happiness item.happiness
    end
  end
end
