import { useParams } from "react-router-dom";
import { useTypedMutation, useTypedQuery } from "@my-sst-app/graphql/urql";
import Empty from "../components/Empty";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import styles from "./Article.module.css";
import { useMemo } from 'react';

interface CommentForm {
  text: string;
  articleID: string;
}



export default function Article() {
  const { id = "" } = useParams();

  // Handle empty document cache
  // https://formidable.com/open-source/urql/docs/basics/document-caching/#adding-typenames
  const context = useMemo(() => ({ additionalTypenames: ["Comment"] }), []);

  const [article] = useTypedQuery({
    query: {
      article: [
        { articleID: id },
        {
          id: true,
          url: true,
          title: true,
          comments: {
            id: true,
            text: true,
          },
        },
      ],
    },
    context,
  });

  const [result, addComment] = useTypedMutation((opts: CommentForm) => ({
    addComment: [
      {
        text: opts.text,
        articleID: opts.articleID,
      },
      {
        id: true,
      },
    ],
  }));

  return (
    <div>
      <Navbar />
      {article.fetching ? (
        <Loading />
      ) : article.data?.article ? (
        <div className={styles.article}>
          <h1>{article.data.article.title}</h1>
          <p>
            <a target="_blank" href={article.data.article.url}>
              {article.data.article.url}
            </a>
          </p>
          <ol className={styles.comments}>
            {article.data.article.comments?.map((comment) => (
              <li key={comment.id} className={styles.comment}>
                {comment.text}
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <Empty>Not Found</Empty>
      )}
    </div>
  );
}
