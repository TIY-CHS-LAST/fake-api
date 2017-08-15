const { times } = require('ramda')
const {
  name,
  helpers,
  hacker,
  internet,
  company,
  email,
  image,
  lorem,
  random
} = require('faker')

module.exports = () => {
  const people = []
  const cats = []
  const sandbox = [ { id: random.uuid(), name: name.firstName() } ]

  times(
    n => {
      people.push({
        id: random.uuid(),
        name: `${name.firstName()} ${name.lastName()}`,
        jobTitle: `${name.jobTitle()}`,
        email: internet.email(),
        username: internet.userName(),
        avatar: image.avatar()
      })
    },
    1000
  )

  times(
    n => {
      cats.push({
        id: random.uuid(),
        name: name.firstName(),
        pic: image.cats(),
        title: name.title(),
        job: name.jobType()
      })
    },
    1000
  )

  return { people, cats, sandbox }
}
