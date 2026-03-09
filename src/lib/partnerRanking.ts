import { Partner } from "@/data/partners"

export function rankPartners(partners: Partner[]) {

return partners
.map((partner) => {

let score = 0

if (partner.featured) score += 100
if (partner.verified) score += 50
if (partner.tier === "strategic") score += 40

if (partner.views) {
score += Math.floor(partner.views / 10)
}

if (partner.reviews) {
score += partner.reviews
}

return {
...partner,
score
}

})
.sort((a, b) => b.score - a.score)

}