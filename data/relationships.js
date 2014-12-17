// Example results for an an article relationships service

module.exports = {
  // Research Advance Usecase
  "http://dx.doi.org/10.7554/eLife.00461": [
    {
      "relationship_type": 'advance',
      "relationship_type_name": 'Research Advance',
      "description": 'Building on previous work (Bai et al., 2013), we describe an algorithm that allows cryo-EM structure determination to near-atomic resolution for protein complexes as small as 170 kDa.',
      "creator": "Donald Duck",
      "created_at": "2014-10-21T11:04:11.547Z",
      "meta": {

      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.00461",
        "title": "Ribosome structures to near-atomic resolution from thirty thousand cryo-EM particles",
        "authors": ["Xiao-chen Bai", "Israel S Fernandez", "Greg McMullan", "Sjors HW Scheres"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/00461/elife00461.xml",
        "published_on": "2013-02-19"
      }
    }
  ],

  // Insight Usecase
  "http://dx.doi.org/10.7554/eLife.03665": [
    {
      "relationship_type": 'insight',
      "relationship_type_name": 'Insight',
      "description": 'Advances in detector hardware and image-processing software have led to a revolution in the use of electron cryo-microscopy to determine complex molecular structures at high resolution.',
      "creator": "Werner Kühlbrandt",
      "created_at": "2014-10-21T11:04:11.547Z",
      "meta": {

      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.03678",
        "title": "Microscopy: Cryo-EM enters a new era",
        "authors": ["Werner Kühlbrandt"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/03678/elife03678.xml",
        "published_on": "2014-08-13"
      }
    }
  ],

  // Co-published Usecase
  "http://dx.doi.org/10.7554/eLife.02763": [
    {
      "relationship_type": 'co-published',
      "relationship_type_name": 'Co-Published',
      "description": 'This article has been co-published.',
      "creator": "Daisy Duck",
      "created_at": "2014-10-21T11:04:11.547Z",
      "meta": {

      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.01739",
        "title": "FRET-based reporters for the direct visualization of abscisic acid concentration changes and distribution in Arabidopsis",
        "authors": ["Rainer Waadt", "Kenichi Hitomi", "Noriyuki Nishimura", "Chiharu Hitomi", "Stephen R Adams", "Elizabeth D Getzoff", "Julian I Schroeder"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/01739/elife01739.xml",
        "published_on": "2014-04-15"
      }
    },
    {
      "relationship_type": 'co-published',
      "relationship_type_name": 'Co-Published',
      "description": 'This article has been co-published.',
      "creator": "Daisy Duck",
      "created_at": "2014-10-21T11:04:11.547Z",
      "meta": {

      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.01741",
        "title": "Abscisic acid dynamics in roots detected with genetically encoded FRET sensors",
        "authors": ["Alexander M Jones", "Jonas ÅH Danielson", "Shruti N ManojKumar", "Viviane Lanquar", "Guido Grossmann", "Wolf B Frommer"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/01741/elife01741.xml",
        "published_on": "2014-04-15"
      }
    }
  ],

  // Registered Report Usecase 2 - registered report pointing to original article and replication study  
  "http://dx.doi.org/10.7554/eLife.03696": [
    {
      "relationship_type": 'original-work',
      "relationship_type_name": "Original Work",
      "description": 'This paper was selected as part of the Cancer Biology Replication study, for more information see <a href="reproducability.org">the reproducablity project</a>',
      "creator": "Donald Duck",
      "created_at": "2014-22-21T11:04:11.547Z",
      "meta": {
      },
      "related_article": {
        "doi": "http://dx.doi.org/10.1038/nature10599",
        "title": "Senescence surveillance of pre-malignant hepatocytes limits liver cancer development",
        "authors": ["Kang T.W.", "Yevsa T.", "Woller N.","Hoenicke L.", "Wuestefeld T.", "Dauch D.", "Hohmeyer A.", "Gereke M.", "Rudalska R.", "Potapova A.", "Iken M.", "Vucur M.", "Weiss S.", "Heikenwalder M.", "Khan S.", "Gil J.", "Bruder D.", "Manns M.", "Schirmacher P.", "Tacke F.", "Ott M.", "Luedde T.", "Longerich T.", "Kubicka S.", "Zender L."],
        "url": "http://dx.doi.org/10.1038/nature10599",
        "published_on": "2010-07-14"
      }
    },
    {
      "relationship_type": 'replication-study',
      "relationship_type_name": "Replication Study",
      "description": 'This is the full replication report for the original work listed as part of the <a href="reproducability.org">the reproducablity project</a>',
      "creator": "Donald Duck",
      "created_at": "2014-10-21T11:04:11.547Z",
      "meta": {
        
      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.03251",
        "title": "Replication study of original paper: Senescence surveillance of pre-malignant hepatocytes limits liver cancer development",
        "authors": ["Replication Study Group", "Pheonix Lab", "T. Peterson"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/03251/elife03251.xml",
        "published_on": "2014-12-23"
      }
    }
  ],

  // Registered Report Usecase 3 - replication study  pointing to original article and registered report
  "http://dx.doi.org/10.7554/eLife.03251": [
    {
      "relationship_type": 'original-work',
      "relationship_type_name": 'Original Work',
      "description": 'This paper was selected as part of the Cancer Biology Replication study, for more information see <a href="reproducability.org">the reproducablity project</a>.',
      "creator": "Donald Duck",
      "created_at": "2014-12-23T11:04:11.547Z",
      "meta": {
   
      },
      "related_article": {
        "doi": "http://dx.doi.org/10.1038/nature10599",
        "title": "Senescence surveillance of pre-malignant hepatocytes limits liver cancer development",
        "authors": ["Kang T.W.", "Yevsa T.", "Woller N.","Hoenicke L.", "Wuestefeld T.", "Dauch D.", "Hohmeyer A.", "Gereke M.", "Rudalska R.", "Potapova A.", "Iken M.", "Vucur M.", "Weiss S.", "Heikenwalder M.", "Khan S.", "Gil J.", "Bruder D.", "Manns M.", "Schirmacher P.", "Tacke F.", "Ott M.", "Luedde T.", "Longerich T.", "Kubicka S.", "Zender L."],
        "url": "http://dx.doi.org/10.1038/nature10599",
        "published_on": "2010-07-14"
      }
    },
    {
      "relationship_type": 'registered-report',
      "relationship_type_name": 'Registered Report',
      "description": 'This registered report outlines the approach agreed prior to undertaking this replications study as part of <a href="reproducability.org">the reproducablity project</a>.',
      "creator": "Donald Duck",
      "created_at": "2014-12-23T11:04:11.547Z",
      "meta": {
     
      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.03696",
        "title": "Registered report for the replication of: Senescence surveillance of pre-malignant hepatocytes limits liver cancer development",
        "authors": ["Replication Study Group", "Pheonix Lab", "T. Peterson"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/03696/elife03696.xml",
        "published_on": "2014-12-23"
      }
    }
  ]
};