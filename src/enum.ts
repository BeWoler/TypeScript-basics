enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart
console.log(membership) // default 0 1 2...

const membershipReverse = Membership[2]
console.log(membershipReverse) // Premium

enum SocialMeida {
  VK = 'VK',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram'
}

const social = SocialMeida.INSTAGRAM
console.log(social) // INSTAGRAM