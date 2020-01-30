# maas-survey

The Mindfulness Attention Awareness Scale survey from [here](http://www.mindfulness-extended.nl/content3/wp-content/uploads/2013/07/MAAS-EN.pdf), built in React. This is a work in progress!

### To preview on your machine:

1. Clone the repo into the location of your choice, and open the folder: `git clone https://github.com/hikurangi/maas-survey.git && cd maas-survey`
2. `yarn` or `npm i` to install the requisite dependencies.
3. `yarn start` or `npm run start` to launch the local server.
4. Use the conveniently launched browser tab *or* navigate to [http://localhost:3000](http://localhost:3000)
5. Et voilà! There you have it.

### To see it in the wild:
[https://hikurangi.github.io/maas-survey/](https://hikurangi.github.io/maas-survey/).

### To deploy:
1. Specify a Github Pages URL in `package.json` under `"homepage"`.
2. Run `npm run predeploy && npm run deploy`
3. Enter your credentials where relevant.
