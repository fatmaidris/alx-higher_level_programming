#include <stdlib.h>
#include "lists.h"

/**
 * *insert_node - insert node to the sorted list
 * @head: address of pointer
 * @number: number to insert
 * Return: inserted node
 */

listint_t *insert_node(listint_t **head, int number)
{
	listint_ *node = *head, *new = malloc(sizeof(listsint_t));

	if (!new)
		return (NULL);

	new->n = number;
	new->next = NULL;

	if (!node || new->n < node->n)
	{
		new->next = node;
		return (*head = new);
	}

	while (node)
	{
		if (!node->next || new->n < node->next->n)
		{
			new->next = node->next;
			node->next = new;
			return (node);
		}
		node = node->next;
	}
	return (NULL);
}
