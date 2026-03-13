import { Partner } from "@/data/partners"

export function rankPartners(partners: Partner[]) {

return partners
.map((partner) => {

let score = 0

// wyróżnienie
if (partner.featured) score += 100

// weryfikacja
if (partner.verified) score += 50

// płatny plan
if (partner.tier === "pro") score += 80
if (partner.tier === "strategic") score += 200

// ruch
if (partner.views) {
score += Math.floor(partner.views / 10)
}

// opinie
if (partner.reviews) {
score += partner.reviews * 2
}

// rating
if (partner.rating) {
score += Math.round(partner.rating * 10)
}

return {
...partner,
score
}

})
.sort((a, b) => b.score - a.score)

}